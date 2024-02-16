import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Typography } from "@/components/ui/typography";
import { FcGoogle } from "react-icons/fc";

type Props = {};

const SignupComponent: React.FC<Props> = (props: Props) => {
  return (
    <Card className="w-[420px] px-4 pb-4 shadow-xl">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
        <CardDescription>
          Start organising your documents with us
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col justify-start items-stretch gap-y-2">
          <form className="flex flex-col items-stretch gap-y-8">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Email</Label>
                <Input id="email" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Password" />
              </div>
            </div>

            <Button size="lg">Signup</Button>
          </form>

          <div className="flex flex-row justify-center items-center">
            <Typography>Already have an account?</Typography>
            <Button variant="link">Signin</Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-stretch">
        <div className="flex flex-row items-center">
          <div className="w-[29%] h-[2px] bg-gray-300"></div>
          <Typography variant="xs" className="px-2">
            OR CONTINUE WITH
          </Typography>
          <div className="w-[29%] h-[2px] bg-gray-300"></div>
        </div>

        <div className="mt-4 flex flex-col items-stretch gap-y-6">
          <Button variant="outline" className="gap-x-2">
            <FcGoogle />
            Google
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignupComponent;
