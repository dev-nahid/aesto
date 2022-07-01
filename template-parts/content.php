<?php
/**
 * Re-usable  card for linking to posts
 * 
 * @package Aesto
 * @since 1.0.0
 */
if ( $wp_query->current_post == 0 && !is_paged() ) : ?>
<article <?php post_class(array( 'it-card', 'first', 'it-grid-c3' )); ?>>
    <?php else : ?>
    <article <?php post_class( 'it-card' ); ?>>
        <?php endif; ?>

        <a class="it-card-link" href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
            <figure class="it-card-image-wrapper">
                <?php if ( has_post_thumbnail()) : 
					the_post_thumbnail( 'thumbnail', array( 'class' => 'it-card-image' ) );
				endif; ?>
            </figure>
        </a>

        <div class="it-card-content">
            <div class="it-card-meta">

                <span class="it-post-card-by">
                    <?php //echo __( 'by ', 'aesto'); the_author(); 
						printf( __( 'by %s', 'aesto' ), '<a href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '" title="' . esc_attr( get_the_author() ) . '" rel="me">' . get_the_author() . '</a>' );
						?>
                    <time><?php the_time(); ?></time>
                </span>

                <?php if( $wp_query->current_post !== 0 && !is_paged() ) : ?>
                <span class="it-post-card-tags">
                    <?php 
						$categories = get_the_category();
						if ( !empty( $categories )) {
							echo '<a href="' . esc_url( get_category_link( $categories[0]->term_id )) . '" title="' . esc_html( $categories[0]->name ) . '"><span class="it-tag-hash">&#35;</span>' . esc_html( $categories[0]->name ) . '</a>';
						}
						?>
                </span>
                <?php endif; ?>

            </div>

            <a class="it-card-link" href="<?php the_permalink();  ?>">
                <h2 class="it-card-title"><?php the_title(); ?></h2>
            </a>

        </div>
    </article>