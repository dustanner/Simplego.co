<?php
class SimpleImage {
 
   var $image;
   var $image_type;
 
   function load($filename) {
 if (!@getimagesize($filename))
 return false;
      $image_info = getimagesize($filename);
      $this->image_type = $image_info[2];
      if( $this->image_type == IMAGETYPE_JPEG ) {
 
         $this->image = @imagecreatefromjpeg($filename);
      } elseif( $this->image_type == IMAGETYPE_GIF ) {
 
         $this->image = @imagecreatefromgif($filename);
      } elseif( $this->image_type == IMAGETYPE_PNG ) {
 
         $this->image = @imagecreatefrompng($filename);
      }
	  return true;
   }
   function save($filename, $image_type=IMAGETYPE_JPEG, $compression=75, $permissions=null) {
 
      if( $image_type == IMAGETYPE_JPEG ) {
         imagejpeg($this->image,$filename,$compression);
      } elseif( $image_type == IMAGETYPE_GIF ) {
 
         imagegif($this->image,$filename);
      } elseif( $image_type == IMAGETYPE_PNG ) {
 
         imagepng($this->image,$filename);
      }
      if( $permissions != null) {
 
         chmod($filename,$permissions);
      }
   }
   function output($image_type=IMAGETYPE_JPEG) {
 
      if( $image_type == IMAGETYPE_JPEG ) {
         imagejpeg($this->image);
      } elseif( $image_type == IMAGETYPE_GIF ) {
 
         imagegif($this->image);
      } elseif( $image_type == IMAGETYPE_PNG ) {
 
         imagepng($this->image);
      }
   }
   function getWidth() {
 
      return imagesx($this->image);
   }
   function getHeight() {
 
      return imagesy($this->image);
   }
   function resizeToHeight($height) {
 
      $ratio = $height / $this->getHeight();
      $width = $this->getWidth() * $ratio;
      $this->resize($width,$height);
   }
 
   function resizeToWidth($width) {
      $ratio = $width / $this->getWidth();
      $height = $this->getheight() * $ratio;
      $this->resize($width,$height);
   }
 
   function scale($scale) {
      $width = $this->getWidth() * $scale/100;
      $height = $this->getheight() * $scale/100;
      $this->resize($width,$height);
   }
 
   function resize($width,$height) {
      $new_image = imagecreatetruecolor($width, $height);
      imagecopyresampled($new_image, $this->image, 0, 0, 0, 0, $width, $height, $this->getWidth(), $this->getHeight());
      $this->image = $new_image;
   }      
 }
$url = 'h3ttp://googleads.g.doubleclick.net/pagead/imgad?id=CLW14PObp5GlwQEQ1AMYPDIIV42Kct3ALQ0'; 
   echo $url = "http://g.etfv.co/http://" . $_GET['url'] ;
//
var_dump(file_get_contents($url));exit;
   if (getimagesize($url) != false)
   {
	   //header("content-type:image/png");
  $ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
$picture = curl_exec($ch);
curl_close($ch);
//Display the image in the browser
header('Content-type: image/png');
echo $picture;

   }
   else
   {
	
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'images/globe.png');
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
$picture = curl_exec($ch);
curl_close($ch);
//Display the image in the browser
//header('Content-type: image/jpg');
echo $picture;

	
   }
 //  $image->resizeToWidth(1000);
 
?>