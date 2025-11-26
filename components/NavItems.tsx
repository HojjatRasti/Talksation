'use client';

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  {label: 'Home', href: '/'},
  {label: 'Companions', href: '/companions'},
  {label: 'My Journey', href: '/my-journey'}
]

const NavItems = () => {

  const pathName = usePathname()

  return (
    navItems.map(({label, href}) => (
      <Link href={href} key={label} className={cn(pathName === href && 'text-primary font-semibold')} >
        {label}
      </Link>
    ) )
  )
}

export default NavItems