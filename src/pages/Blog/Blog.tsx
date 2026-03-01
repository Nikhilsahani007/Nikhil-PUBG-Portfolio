import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog';
import styles from './Blog.module.css';

function BlogList() {
    return (
        <main className={styles.blog}>
            <div className={styles.blogInner}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">// Field Reports</p>
                    <h1 className="section-title">Blog</h1>
                </motion.div>

                <div className={styles.grid}>
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`} className={styles.postCard}>
                                <div className={styles.postMeta}>
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                                <div className={styles.postTags}>
                                    {post.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <span className={styles.readMore}>Read More →</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}

function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <main className={styles.blog}>
                <div className={styles.blogInner}>
                    <h1>Post Not Found</h1>
                    <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                        ← Back to Blog
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.blog}>
            <div className={styles.blogInner}>
                <div className={styles.singlePost}>
                    <Link to="/blog" className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        ← Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.postMeta} style={{ marginTop: '1.5rem' }}>
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className={styles.postTitle} style={{ fontSize: '1.6rem' }}>{post.title}</h1>
                        <div className={styles.postTags} style={{ marginBottom: '2rem' }}>
                            {post.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>

                        <div
                            className={styles.postContent}
                            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
                        />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

export { BlogList, BlogPost };
