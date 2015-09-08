<?php include 'class.php';
// instance objek db
$db = new database();
// koneksi ke MySQL via method
$db->connectMySQL();
// proses hapus data
if (isset($_GET['aksi'])) {
    if ($_GET['aksi'] == 'hapus') {
        // baca ID dari parameter ID Anggota yang akan dihapus
        $id = $_GET['id'];
        // proses hapus data anggota berdasarkan ID via method
        $db->hapusAnggota($id);
    } elseif ($_GET['aksi'] == 'tambah') {
        echo"<br>
<form method=POST action='?aksi=tambahAnggota'>
<table>
<tr><td>Nama</td><td><input type=text name='name'></td></tr>
<tr><td>Alamat</td><td><input type=text name='address'></td></tr>
<tr><td>Telpon</td><td><input type=text name='phone'></td></tr>
<tr><td></td><td><input type=submit value='simpan'></td></tr>
</table>
</form>
";
    } elseif ($_GET['aksi'] == 'tambahAnggota') {
        $name = $_POST['name'];
        $address = $_POST['address'];
        $phone = $_POST['phone'];
        $db->tambahAnggota($name, $phone, $address);
    }
// proses edit data
    else if ($_GET['aksi'] == 'edit') {
        // baca ID anggota yang akan diedit
        $id = $_GET['id'];
// menampilkan form edit anggota pakai method bacaDataAnggota()
        ?>   
 
        <form method="post" action="<?php $_SERVER['PHP_SELF'] ?>?aksi=update">
            <table>
                <tr><td>name Anggota</td><td>:</td>
                    <td><input type="text" name="name" value="<?php echo $db->bacaDataAnggota('name', $id); ?>"></td>
                </tr>
                <tr><td>address</td><td>:</td>
                    <td><input type="text" name="address" value="<?php echo $db->bacaDataAnggota('address', $id); ?>" size="40"></td>
                </tr>
                <tr><td>phone</td><td>:</td>
                    <td><input type="text" name="phone" value="<?php echo $db->bacaDataAnggota('phone', $id); ?>"></td>
                </tr> 
            </table>
            <input type="hidden" name="id" value="<?php echo $id; ?>">
            <input type="submit" name="submit" value="Update Data">
        </form>
 
        <?php
    } else if ($_GET['aksi'] == 'update') {
        // proses update data anggota
        $id = $_POST['id'];
        $name = $_POST['name'];
        $address = $_POST['address'];
        $phone = $_POST['phone'];
        // update data via method
        $db->updateDataAnggota($id, $name, $phone, $address);
    }
}
// buat array data anggota dari method tampilAnggota()
$arrayanggota = $db->tampilAnggota();
echo"</table> <br> <a href='?aksi=tambah'>TAMBAH</a>";
echo "<table border='1' cellpadding='5'>
      <tr><th>No</th>
           <th>name Anggota</th>
           <th>address</th>
           <th>phone</th>
           <th>Aksi</th>
       </tr>";
$i = 1;
foreach ($arrayanggota as $data) {
    echo "<tr><td>" . $i . "</td> 
               <td>" . $data['name'] . "</td>
               <td>" . $data['address'] . "</td>
               <td>" . $data['phone'] . "</td>
               <td><a href='" . $_SERVER['PHP_SELF'] . "?aksi=edit&id=" . $data['id'] . "'>Edit</a> |
                   <a href='" . $_SERVER['PHP_SELF'] . "?aksi=hapus&id=" . $data['id'] . "'>Hapus</a></td>
            </tr>";
    $i++;
}
echo "</table>";
?>
<div><a id="href" href="#text" target="_top">klik</a></div>
<div id="text" style="display:block;margin-top: 1600px"><a  href="#href">these is text</a></div>

<script>
var a = new Date();
var d = new Date("2015,9,7");
document.getElementById("href").innerHTML = +a >= +d
</script>