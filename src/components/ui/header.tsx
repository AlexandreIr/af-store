import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
    return ( 
        <Card className="flex justify-between p-[1.875rem] items-center" >
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg">
                        Menu
                    </SheetHeader>


                    <div className="mt-2 flex flex-col gap-2">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <LogInIcon size={16}/>  Fazer Login
                        </Button>

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentIcon size={16}/>  Ofertas
                        </Button>

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <ListOrderedIcon size={16}/>  Catalogo
                        </Button>

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon size={16}/>  Inicio
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>


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