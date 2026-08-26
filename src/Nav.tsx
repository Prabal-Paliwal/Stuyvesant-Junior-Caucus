import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar-pill hidden items-center gap-3 md:flex">
        <Link to="/" className="navbar-brand">
          Junior Caucus
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink className="navbar-link px-3 text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/" />}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="navbar-link px-3 text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/cabinet" />}>
                Cabinet
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="navbar-link px-3 text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/resources" />}>
                Resources
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="navbar-link px-3 text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/events" />}>
                Events
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="navbar-link px-3 text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/jprom" />}>
                Jprom
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="navbar-link px-3 text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/contacts" />}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="navbar-pill flex items-center gap-3 md:hidden">
        <Link to="/" className="navbar-brand">
          Junior Caucus
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger aria-label="Menu" className="text-[#547fa8] hover:bg-transparent">
                <Menu />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="navbar-dropdown">
                <NavigationMenuLink className="navbar-link text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/" />}>
                  Home
                </NavigationMenuLink>
                <NavigationMenuLink className="navbar-link text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/cabinet" />}>
                  Cabinet
                </NavigationMenuLink>
                <NavigationMenuLink className="navbar-link text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/resources" />}>
                  Resources
                </NavigationMenuLink>
                <NavigationMenuLink className="navbar-link text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/events" />}>
                  Events
                </NavigationMenuLink>
                <NavigationMenuLink className="navbar-link text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/jprom" />}>
                  Jprom
                </NavigationMenuLink>
                <NavigationMenuLink className="navbar-link text-base font-bold text-[#547fa8] hover:bg-transparent hover:underline focus:bg-transparent" render={<Link to="/contacts" />}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default Nav
