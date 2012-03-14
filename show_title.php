<?php
//echo $_POST['seed'] . '@#$' . $_POST['url'];exit;
ini_set('user_agent', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.9) Gecko/20071025 Firefox/2.0.0.9');
$url = $_POST['url'];"http://www.SimpleGo.co";
$file = file($url);
$file = implode("",$file);

if(preg_match("/<title>(.+)<\/title>/i",$file,$m))
    print $_POST['seed'] . '@#$' . substr($m[1],0,75);
else
    print $_POST['seed'] . '@#$' . $_POST['text'];;
	
	
	exit;
function file_get_contents_curl($url)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}

$html = file_get_contents_curl($url);

//parsing begins here:
$doc = new DOMDocument();
@$doc->loadHTML($html);
$nodes = $doc->getElementsByTagName('title');

//get and display what you need:
$title = $nodes->item(0)->nodeValue;
 print $_POST['seed'] . '@#$' . $title;

	?>