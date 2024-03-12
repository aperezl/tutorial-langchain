import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

export function LoginPage() {

  return (
    <div className="w-full h-full content-center grid justify-center">
      <Card className="w-[350px] border-0">
        <div className='w-100 grid justify-center'>
        <Image alt="logo" src="/logo.png" width={500} height={500}></Image>
        </div>
        <CardHeader>
          <CardTitle className="text-center">Login to platform</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button><a href="/api/auth/login">Login</a></Button>
        </CardContent>
      </Card>
    </div>
  )
}



export default LoginPage;
