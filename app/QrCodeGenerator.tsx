"use client";
import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Tabs,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { Layout, LayoutGrid, Link, Mail, Underline } from 'lucide-react';
import { TabsContent } from '@radix-ui/react-tabs';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"; // Update the path to your Input component
import { QRCodeSVG } from 'qrcode.react';

function QrCodeGenerator() {

  const [url,setUrl]=React.useState("");
  const [color,setColor]=React.useState("#ffffff");
  const [bgColor,setBgColor]=React.useState("#057FFF");
  const [logo,setLogo]=React.useState<string | null>(null);
  const [logoFile,setLogoFile]=React.useState<File | null>(null);
  const [qrType,setQrType]=React.useState("Link");
  const [email,setEmail]=React.useState("");
  const [subject,setSubject]=React.useState("");
  const [message,setMessage]=React.useState("");

  return( 
    <div className='relative z-10 mx-6 flex max-w-[850px] w-full min-h-[460px] h-full'>
    <Card className="flex-1 flex flex-col w-full h-auto mx-auto bg-[#ecf7ff]/80 backdrop-blur-md shadow-sm border-2 border-white/40 rounded-xl">

        <CardHeader>
            <CardTitle className='text-3xl font-bold text-center text-[#037fff]'>QR code Generator</CardTitle>
        </CardHeader>
        <CardContent className='flex-1'>
            <div className='h-96 flex flex-col md:flex-row gap-8'>
                <div className='flex-1 space-y-6'>
                    <Tabs
                        defaultValue='link'
                        className='flex-1 space-y-6'
                        onValueChange={(val) => setQrType(val)}
                    >
                        <TabsList className='h-10 grid w-full grid-cols-2 bg-[#057FFF] text-lg'>
                            <TabsTrigger value='link' className='text-white font-bold'>
                                <Link className="w-4 h-4 mr-2" />
                                Link
                            </TabsTrigger>
                            <TabsTrigger value='email' className='text-white font-bold'>
                                <Mail className="w-4 h-4 mr-2" />
                                Email
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value='link'>
                            <div className='space-y-6'>
                                <div className='space-y-2'>
                                    <Label
                                        htmlFor='url'
                                        className='font-semibold text-[#057FFF]'
                                    >
                                        URL
                                    </Label>
                                    <Input
                                        id="url"
                                        type="text"
                                        value={url}
                                        placeholder='https://example.com'
                                        onChange={(e) => setUrl(e.target.value)}
                                        className="w-full border-2 bg-transparent  border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                    <div className="space-y-4">
                        <div  className="flex space-x-4">
                            <div className="space-y-2 flex-1">
                                <Label
                                htmlFor="color"
                                className="font-semibold text-[#057FFF]">
                                    QR Code Color
                                </Label>
                                <div className="flex items-center gap-1">
                                    <div
                                        className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
                                        style={{ backgroundColor: color }}
                                    >
                                        <input
                                            type="color"
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                    </div>
                                    <Input
                                        type="text"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                        className="flex-1 border-2 h-12 bg-transparent  border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 flex-1">
                                <Label
                                    htmlFor="bgColor"
                                    className="font-semibold text-[#057FFF]"
                                >
                                    Background Color
                                </Label>
                                <div className="flex items-center gap-1">
                                    <div
                                        className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
                                        style={{ backgroundColor: bgColor }}
                                    >
                                        <input
                                            type="color"
                                            value={bgColor} // Corrected value to use bgColor
                                            onChange={(e) => setBgColor(e.target.value)}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                    </div>
                                    <Input
                                        type="text"
                                        value={bgColor} // Corrected value to use bgColor
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="flex-1 border-2 h-12 bg-transparent border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='logo' className='font-bold text-[#037FFF]'>
                                Logo
                            </Label>
                            <Input
                            type="file"
                            id="logo"
                            accept="image/*"
                            onChange={(e: any) => {
                              if (e.target.files && e.target.files[0]) {
                                setLogoFile(e.target.files[0]);
        
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setLogo(reader.result as string);
                                };
                                reader.readAsDataURL(e.target.files[0]);
                              }
                            }}
                            className="w-full border-2 bg-transparent  border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                </div>
                <div className='h-[23rem] w-[10rem] -ml-4 mr-[1.75rem] relative flex-1 bg-[#037FFF] rounded-lg flex flex-col justify-center space-y-6'>
                    <span>
                        <LayoutGrid className='w-8 h-24  text-white absolute  top-2 right-4 'style={{ height: "3rem" }}/>
                    </span>
                    <div id="qr-code"className='flex justify-center'>
                        <div className='relative'>
                          <QRCodeSVG
                            value={url}
                            size={256}
                            fgColor={color}
                            bgColor={bgColor}
                            imageSettings={
                                logo 
                                ? {src:logo,height:50,width:50,excavate:true}
                                : undefined
                            }
                            />

                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</div>

);
}

export default QrCodeGenerator;