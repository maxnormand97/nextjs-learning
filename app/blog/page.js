import Link from 'next/link';
export default function BlogPage() {
    return (
        <main>
            <h1>Blog main page</h1>
            {/* link to blog-1 */}
            <Link href="/blog/page-1">
                <p>Blog post 1</p>
            </Link>
            <Link href="/blog/page-2">
                <p>Blog post 2</p>
            </Link>
        </main>
    );
}