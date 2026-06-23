<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificamos cuál formulario se está enviando
    if (isset($_POST['form_id']) && $_POST['form_id'] === 'talento') {
        // FORMULARIO DE TALENTO
        $nombre = $_POST["nombre"];
        $email = $_POST["email"];
        $concepto = $_POST["concepto"];
        $mensaje = $_POST["mensaje"];

        $to = "auxiliar.rh1@beyondgroup.co"; // Destinatario del formulario 2
        $subject = "Nuevo registro para talento humano";

        $body = "Nombre: $nombre\n";
        $body .= "Email: $email\n";
        $body .= "Concepto: $concepto\n";
        $body .= "Mensaje: $mensaje";

        // Si hay un archivo adjunto
        if (isset($_FILES["archivo"]) && $_FILES["archivo"]["error"] === UPLOAD_ERR_OK) {
            $archivo = $_FILES["archivo"]["tmp_name"];
            $nombreArchivo = $_FILES["archivo"]["name"];
            $contenidoArchivo = chunk_split(base64_encode(file_get_contents($archivo)));
            $tipoArchivo = $_FILES["archivo"]["type"];

            $boundary = md5(time());
            $headers = "From: $nombre <$email>\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

            $mensajeCorreo = "--{$boundary}\r\n";
            $mensajeCorreo .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
            $mensajeCorreo .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
            $mensajeCorreo .= $body . "\r\n";

            $mensajeCorreo .= "--{$boundary}\r\n";
            $mensajeCorreo .= "Content-Type: $tipoArchivo; name=\"$nombreArchivo\"\r\n";
            $mensajeCorreo .= "Content-Disposition: attachment; filename=\"$nombreArchivo\"\r\n";
            $mensajeCorreo .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $mensajeCorreo .= $contenidoArchivo . "\r\n";
            $mensajeCorreo .= "--{$boundary}--";

            $success = mail($to, $subject, $mensajeCorreo, $headers);
        } else {
            // Sin archivo adjunto
            $headers = "From: $nombre <$email>";
            $success = mail($to, $subject, $body, $headers);
        }

    } else {
        // FORMULARIO DE CONTACTO GENERAL (formulario 1)
        $name = $_POST["name"];
        $subjectInput = $_POST["subject"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $to = "director.comercial@beyondgroup.co"; // Destinatario del formulario 1
        $subject = "Nuevo mensaje de contacto";

        $body = "Nombre: $name\n";
        $body .= "Asunto: $subjectInput\n";
        $body .= "Email: $email\n";
        $body .= "Mensaje: $message";

        $headers = "From: $name <$email>";

        $success = mail($to, $subject, $body, $headers);
    }

    if ($success) {
        echo "Gracias, tu mensaje ha sido enviado correctamente.";
    } else {
        http_response_code(500);
        echo "Error: No se pudo enviar el mensaje.";
    }

} else {
    http_response_code(400);
    echo "Error: Solicitud no válida.";
}
?>
