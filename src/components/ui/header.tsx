"use client"

import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon, LogOutIcon} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";

const Header = () => {
    const {status, data}=useSession();
    const handleLoginClick= async ()=>{
        await signIn();
    }

    const handleLogoutClick = async () => {
        await signOut();
    };
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

                    {status==="authenticated" && data?.user &&(
                        <div className=" flex flex-col">
                            <div className="flex items-center gap-2 py-4">
                                <Avatar>
                                <AvatarFallback>
                                {data?.user?.name?.[0].toLocaleUpperCase()}
                                    </AvatarFallback>

                            {data?.user?.image &&(
                                <AvatarImage src={data?.user?.image}/>
                            )}
                                </Avatar>
                                <div className="div div-col">
                                    <p className="font-medium">{data?.user?.name}</p>
                                    <p className="text-sm opacity-75">Boas Compras!</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <Separator/>
                    <div className="mt-2 flex flex-col gap-2">
                        {status==="unauthenticated" && (
                            <Button onClick={handleLoginClick} 
                            variant="outline" 
                            className="w-full justify-start gap-2">
                            <LogInIcon size={16}/>  
                            Fazer Login
                            </Button>
                        )}

                        {status === "authenticated" && (
                            <Button onClick={handleLogoutClick} 
                            variant="outline" 
                            className="w-full justify-start gap-2">
                            <LogOutIcon size={16}/>  
                            Fazer Logout
                            </Button>
                        )}

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