import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SignUpForm() {
  return (
    <section className="cr-container">
      <div className="cr-bg-gradient rounded-2xl text-center px-10 py-16 lg:px-20 lg:py-16 flex flex-col items-center justify-between gap-4 lg:flex-row duration-300">
        <h3 className="text-xl font-extrabold">
          Fique por dentro das nossas novidades!
        </h3>
        <Input className="max-w-xs" placeholder="Digite seu email" />
        <Button className="font-bold w-fit px-20 py-8" variant="secondary">
          Inscrever-se
        </Button>
      </div>
    </section>
  );
}
