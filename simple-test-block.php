<?php
/**
 * Plugin Name: Matt Parman Test Block
 * Description: Creating a new block for my Automattic technical assessment
 * Version: 1.0.0
 * Author: Matt Parman
 *
 * @package mattparmantestblock
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function mattparmantestblock_editor_assets() {
    wp_enqueue_script(
        // the name - also generally {namespace/blockname}
        'mattparmantestblock/simple-test-block',
        // where the javscript is located
        plugins_url( 'build/index.build.js', __FILE__ ),
        // and dependencies WordPress needs to serve up for us
        // you must have these two for the most basic block
        array( 'wp-blocks', 'wp-element', 'wp-editor' )
    );
};

add_action( 'enqueue_block_editor_assets', 'mattparmantestblock_editor_assets' );
