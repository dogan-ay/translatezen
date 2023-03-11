import Link from "next/link";
export default function Header(){
    return(
        <header>
            <nav>
              <span>
                <Link href={'/'}>
                  <p className="navlink">Home</p>
                </Link>
                <Link href={'/about'}>
                  <p className="navlink">About</p>
                </Link>              
              </span>
              <span>
                <h1>TranslateZen</h1>
              </span>
            </nav>
            
        </header>
    );
}