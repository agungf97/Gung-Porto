// const { default: Link } = require("next/link")
import Link from "next/link"

const NavLink = ({href, tittle}) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-sm rounded md:p-0 text-gray-400 hover:text-white">
            {tittle}
        </Link>
    )
}

export default NavLink;