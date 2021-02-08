<?php
$login=filter_var(trim($_POST["login"]),FILTER_SANITIZE_STRING);
$name=filter_var(trim($_POST["name"]),FILTER_SANITIZE_STRING);
$pass=filter_var(trim($_POST["pass"]),FILTER_SANITIZE_STRING);
$but=$_POST["but"];

	if (isset($but)) {
	if($login=="" || mb_strlen($login) < 5 || mb_strlen($login) > 90) {
		echo "Введите корректный логин";
		exit();
	} else if($name=="" ||mb_strlen($name) < 3 || mb_strlen($name)>20) {
		echo "Введите корректное имя";
		exit();
	} else if($pass=="" ||mb_strlen($pass) < 3 || mb_strlen($pass)>15) {
		echo "Введите корректный пароль";
		exit();
	} else {echo "Вы успешно зарегестрировались";
	$pass=md5($pass."qwe");

	$mysql= new mysqli('localhost','root','root','registerbd');
	$mysql->query("INSERT INTO`users`(`login`,`pass`,`name`) VALUES('$login','$pass','$name')");
	$mysql->close();

	header('Location: /');


}

}


?>