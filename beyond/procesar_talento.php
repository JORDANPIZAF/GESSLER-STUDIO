<?php
// Configuración básica
header('Content-Type: application/json');

// 1. Validar método de solicitud
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// 2. Configuración de correo
$destinatario = 'multimedia@beyondgroup.co'; // CAMBIAR POR TU CORREO REAL
$asunto = 'Nueva solicitud de empleo - ' . date('d/m/Y H:i');
$headers = "MIME-Version: 1.0\r\n";

// 3. Validar y sanitizar campos obligatorios
$camposRequeridos = ['nombre', 'email', 'concepto', 'mensaje'];
$datos = [];

foreach ($camposRequeridos as $campo) {
    if (empty($_POST[$campo])) {
        http_response_code(400);
        echo json_encode(['error' => "El campo $campo es requerido"]);
        exit;
    }
    
    // Sanitizar datos
    $datos[$campo] = filter_var(trim($_POST[$campo]), FILTER_SANITIZE_STRING);
}

// 4. Validar email
if (!filter_var($datos['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'El email proporcionado no es válido']);
    exit;
}

// 5. Procesar archivo adjunto
$archivoAdjunto = '';
$nombreArchivo = '';
$infoArchivo = '';

if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
    $archivo = $_FILES['archivo'];
    
    // Validar tipo de archivo
    $extensionesPermitidas = ['pdf', 'doc', 'docx'];
    $extension = strtolower(pathinfo($archivo['name'], PATHINFO_EXTENSION));
    
    if (!in_array($extension, $extensionesPermitidas)) {
        http_response_code(400);
        echo json_encode(['error' => 'Solo se permiten archivos PDF, DOC o DOCX']);
        exit;
    }
    
    // Validar tamaño (5MB máximo)
    if ($archivo['size'] > 5242880) {
        http_response_code(400);
        echo json_encode(['error' => 'El archivo no debe exceder 5MB']);
        exit;
    }
    
    // Leer contenido del archivo
    $contenidoArchivo = file_get_contents($archivo['tmp_name']);
    $archivoAdjunto = chunk_split(base64_encode($contenidoArchivo));
    $nombreArchivo = $archivo['name'];
    $tipoArchivo = $archivo['type'];
    
    $infoArchivo = "\n\nArchivo adjunto: $nombreArchivo";
}

// 6. Construir cuerpo del mensaje
$cuerpoMensaje = "Has recibido una nueva solicitud de empleo:\n\n";
$cuerpoMensaje .= "Nombre: {$datos['nombre']}\n";
$cuerpoMensaje .= "Email: {$datos['email']}\n";
$cuerpoMensaje .= "Concepto: {$datos['concepto']}\n";
$cuerpoMensaje .= "Mensaje:\n{$datos['mensaje']}$infoArchivo";

// 7. Configurar cabeceras para email con/sin adjunto
if (!empty($archivoAdjunto)) {
    $boundary = md5(time());
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    
    $mensajeCompleto = "--$boundary\r\n";
    $mensajeCompleto .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
    $mensajeCompleto .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $mensajeCompleto .= $cuerpoMensaje . "\r\n\r\n";
    $mensajeCompleto .= "--$boundary\r\n";
    $mensajeCompleto .= "Content-Type: $tipoArchivo; name=\"$nombreArchivo\"\r\n";
    $mensajeCompleto .= "Content-Disposition: attachment; filename=\"$nombreArchivo\"\r\n";
    $mensajeCompleto .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $mensajeCompleto .= $archivoAdjunto . "\r\n";
    $mensajeCompleto .= "--$boundary--";
} else {
    $headers .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
    $mensajeCompleto = $cuerpoMensaje;
}

// 8. Cabeceras adicionales
$headers .= "From: {$datos['nombre']} <{$datos['email']}>\r\n";
$headers .= "Reply-To: {$datos['email']}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 9. Enviar correo
if (mail($destinatario, $asunto, $mensajeCompleto, $headers)) {
    // Opcional: Guardar en base de datos o registrar el envío
    
    // 10. Respuesta de éxito
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el mensaje. Por favor inténtelo nuevamente.']);
}

// 11. (Opcional) Guardar el archivo en el servidor
if (!empty($archivoAdjunto) {
    $directorioUploads = 'uploads/';
    if (!file_exists($directorioUploads)) {
        mkdir($directorioUploads, 0755, true);
    }
    
    $nombreUnico = uniqid() . '_' . $nombreArchivo;
    $rutaArchivo = $directorioUploads . $nombreUnico;
    
    if (move_uploaded_file($_FILES['archivo']['tmp_name'], $rutaArchivo)) {
        // Archivo guardado correctamente
    }
}
?>