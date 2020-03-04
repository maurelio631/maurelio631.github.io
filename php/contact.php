<?php
if (isset($_POST['email'] && !empty($_POST['email'])){
$nome = addslashes($_POST['inputnome']);
$email = addslashes($_POST['inputemail']);
$cemail = addslashes($_POST['inputconfirmaemail']);
$celular = addslashes($_POST['inputcelular']);
$assunto = addslashes($_POST['inputassunto']);

$destinatario = "marco.silva631@outlook.com";
$assunto = $_POST['inputassunto'];
$corpomensagem = "Nome do Interessado" .$nome."\n".  
                "Email do Interessado" .$email."\n".
                "Parabéns pelo trabalho campeão!";
$header = "From:marcco.silva631@outlook.com"."\r\n"."Reply-To:".$email."\e\n"."X=MailerPHP/" .phpversion();
if(mensagemcompleta($destinatario,$assunto,$corpomensagem,$header))
{
    echo("Sua mensagem foi enviada com sucesso :)");
}
else
{
    echo("Sua mensagem não foi enviada, tente novamente");
}

}
?>