<?php
    include 'user.php';

    class login extends database {
    // properti
        /*private $dbHost = "localhost";
        private $dbUser = "root";
        private $dbPass = "";
        private $dbName = "project";


    // method koneksi MySQL*/
        function __construct() {
             $success = false;

            if(!empty($_POST)) {
                if(isset($_POST['user_name']) && isset($_POST['password'])) {
                    $this->user_name = $_POST['user_name'];
                    $this->password = $_POST['password'];

                    $query = mysql_query("SELECT user_name FROM customer where user_name = '".$this->user_name."' and password ='".$this->password."'") or die($query."<br/><br/>".mysql_error());
                    while($row = mysql_fetch_array($query)) {
                        $_SESSION['username'] = $row['user_name'];
                        $success = true;
                    }
               }
            }

            $json = array(
                'success' => $success,
                'session' =>  array (
                                'user_name' => ($success) ? $_SESSION['username'] : ''
                                )
            );

            echo json_encode($json);
        }

    }


    $user = new login();
?>

