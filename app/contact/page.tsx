import Container from "../components/layout/Container";
import ScrambleText from "../components/ScrambleText";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Container>
      <div className="flex-1 w-full flex flex-col justify-between gap-8 pt-8 pb-20 lg:pb-0 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-12">
          <ScrambleText
            withHover
            href="/contact"
            text="contact"
            className="font-mono text-xs uppercase w-fit lg:hidden"
          />
          <ScrambleText
            text="GET IN TOUCH"
            className="font-sans text-5xl lg:text-[60px] font-medium mb-10"
          />
        </div>
        <ContactForm />
        <p className="text-[10px] text-white/50 leading-4 lg:leading-none lg:text-white lg:text-2xl font-mono lg:font-sans font-medium pr-4 uppercase lg:normal-case">
          Have a project in mind or just want to chat? <br /> Feel free to reach
          out through this form.
        </p>
      </div>
    </Container>
  );
}
