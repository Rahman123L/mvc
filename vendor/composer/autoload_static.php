<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5bfc308a4a5db7488cf37d37a3a3b592
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Website\\Mvc\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Website\\Mvc\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5bfc308a4a5db7488cf37d37a3a3b592::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5bfc308a4a5db7488cf37d37a3a3b592::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5bfc308a4a5db7488cf37d37a3a3b592::$classMap;

        }, null, ClassLoader::class);
    }
}
