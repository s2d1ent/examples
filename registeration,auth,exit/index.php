<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="">

<link rel="shortcut icon" href="">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>REGISTER</title>
</head>
<body>
	<div class="cont">
<?php
if($_COOKIE["user"]==""):

?>

		<h2> Форма регистрации</h2>
		<form action="check.php" method="post">
			<input type="text" name="login" id="login" placeholder="Логин"><br/>
			<input type="text" name="name" id="name" placeholder="Имя"><br/>
			<input type="text" name="pass" id="pass" placeholder="Пароль"><br/>
			<input type="submit" name="but" value="Зарегистрироваться"><br/>
		</form>

		<h2> Форма авторизации</h2>
		<form action="auth.php" method="post">
			<input type="text" name="login" id="login" placeholder="Логин"><br/>
			<input type="password" name="pass" id="pass" placeholder="Пароль"><br/>
			<input type="submit" name="but" value="Авторизоваться"><br/>
		</form>
<?php
else:
?>
<p> Вы уже авторизованны на сайте.Чтобы выйти нажмите <a href="exit.php">тут</a> </p>

<?php
endif;
?>


	</div>

</body>
</html>