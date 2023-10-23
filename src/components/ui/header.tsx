import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
    return ( 
        <Card className="flex justify-between p-[1.875rem] items-center" >
            <Button size="icon" variant="outline">
                <MenuIcon/>
            </Button>

            <h1 className="font-semibol text-lg">
                <span className="text-primary">AF</span> STORE
            </h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon/>
            </Button>

        </Card>
     );
}
 
export default Header;