<?php
    class database {
    // properti
        private $dbHost = "localhost";
        private $dbUser = "root";
        private $dbPass = "";
        private $dbName = "project";


    // method koneksi MySQL
        function __construct() {
            mysql_connect($this->dbHost, $this->dbUser, $this->dbPass);
            mysql_select_db($this->dbName) or die("Database tidak ada!");
        }

        function userRecord() {
            set_time_limit(50000000000000000);
            $data = array();

            if(!empty($_GET)) {
                if(isset($_GET['start']) && isset($_GET['limit'])) {
                    $this->limit = $_GET['limit'];
                    $this->start = ($_GET['start'] <= 0) ? 1 : $_GET['start'];

                    $query = mysql_query("SELECT * FROM users LIMIT $this->start, $this->limit");


                    while ($row = mysql_fetch_array($query)) {
                        $data[] =  $row;
                    }
               }
               else if(isset($_GET['pagging'])) {
                    $query = mysql_query("SELECT * FROM users LIMIT 0, 300");


                    while ($row = mysql_fetch_array($query)) {
                        $data[] =  $row;
                    }
               }
            }
           else {
                return $data;
           }

            $json = array(
                'success' => true,
                'data' => $data
            );

            echo json_encode($json);
            
        }

    }


    $user = new database();

    $user->userRecord();
?>

