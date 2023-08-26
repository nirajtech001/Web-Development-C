<?php
session_start();
$_SESSION['message'] = 'This session variable';
?>
<!DOCTYPE html>
<html>
<head>
<title>22MCA0281(Niraj Kumar)</title>
</head>
<body>
<h1>Welcome to Webpage 1</h1>
<h3>Hello,
<?php
echo $_SESSION['message']."<br/>";
?>
</h3>
<a href="page2.php?<?php echo session_id(); ?>"><button>send
message</button></a>
</body>
</html>