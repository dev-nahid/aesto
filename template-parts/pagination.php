<?php
/**
 * Re-usable load more pagination
 * 
 * @package Aesto
 * @since 1.0.0
 */

 ?>
<div class="it-pagination">
    <a class="it-load-posts it-button it-button-primary" data-page="1"
        data-url="<?php echo admin_url( 'admin-ajax.php' ) ?>">
        <?php echo __( 'Load More', 'aesto' ) ?>
    </a>
</div>