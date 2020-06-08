import About from './About'
import Contact from './Contact'
import Link from 'next/link'
function Nav()
{
    return <div>
        <Link href="/About">
<a>About</a>
</Link>
<br/>
<Link href="/Contact">
<a>About</a>
</Link>
<br/>
<Link href="/">
<a>Home</a>
</Link>
<br/>
    </div>
}
export default Nav;