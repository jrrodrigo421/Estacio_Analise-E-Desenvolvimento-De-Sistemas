<?php
$nome_do_servidor = "localhost";
$login = "username";
$senha = "password";
// Criar Conexão - NOTAR SEM o comando NEW (Procedural)
$conn = mysqli($nome_do_servidor, $login, $senha);
// Checar conexão
if ($conn->connect_error) {
  die("Conexão falhou: ".$conn->mysqli_connect_error());
}
echo "Conexão com sucesso!";
?>

