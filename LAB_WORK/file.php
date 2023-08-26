<?php
function isAllowedExtension($filename) {
$allowedExtensions = array('doc', 'docx', 'pdf');
$fileExtension = strtolower(pathinfo($filename,
PATHINFO_EXTENSION));
return in_array($fileExtension, $allowedExtensions);
}
function isFileSizeWithinLimit($filesize, $limit) {
return $filesize <= $limit;
}
function generateUniqueFilename($filename) {
$uniqueString = uniqid();
$fileExtension = strtolower(pathinfo($filename,
PATHINFO_EXTENSION));
return $uniqueString . '.' . $fileExtension;
}
if (isset($_POST['submit'])) {
$uploadDir = 'uploads/';
$maxFileSize = 10 * 1024 * 1024;
if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
$filename = $_FILES['file']['name'];
$filesize = $_FILES['file']['size'];
$tmpFilePath = $_FILES['file']['tmp_name'];
if (isAllowedExtension($filename)) {
if (isFileSizeWithinLimit($filesize, $maxFileSize))

{

$uniqueFilename =
generateUniqueFilename($filename);

$uploadPath = $uploadDir . $uniqueFilename;
if (move_uploaded_file($tmpFilePath,

$uploadPath)) {

echo "File uploaded successfully.";

} else {
echo "Error uploading the file.";
}
} else {
echo "File size exceeds the maximum limit (10

MB).";

}
} else {
echo "Invalid file format.";
}
} else {
echo "Error: " . $_FILES['file']['error'];
}
}
?>
<!DOCTYPE html>
<html>
<head>
<title>File Upload</title>
</head>
<body>
<h1>Upload File</h1>
<form method="post" enctype="multipart/form-data">
<input type="file" name="file" required>
<input type="submit" name="submit" value="Upload">
</form>
</body>
</html>