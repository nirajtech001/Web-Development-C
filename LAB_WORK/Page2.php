<?php
session_start();
$message = isset($_SESSION['message']) ?
$_SESSION['message'] : '
No message has been sent';
?>
<!DOCTYPE html>
<html>

<head>
<title>22MCA0281(Niraj Kumar)</title>
</head>
<body>
<h1>Welcome to Webpage 2</h1>
<h3>
<?php
echo "Message sent is= " . $message;
?>
</h3>
</body>
</html>