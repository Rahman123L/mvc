<?php 
namespace Website\Mvc\app;

class View 
{
    // render untuk tampilan halaman
    public static function render(string $view, $model) {
        require __DIR__ . '/../view/header.php';
        require __DIR__ . '/../view/' . $view . '.php';
        require __DIR__ . '/../view/footer.php';
    }

    // redirect
    public static function redirect(string $url) {
        header("Location: $url");
    }
}

?>