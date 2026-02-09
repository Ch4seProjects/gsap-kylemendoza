import Image from "next/image";
import ScrambleText from "../components/ScrambleText";
import Container from "../components/layout/Container";

const bio = [
  "I'm Kyle Dominic Mendoza, a Frontend Developer with hands-on experience building and enhancing web and desktop applications.",
  "specialize in crafting efficient, scalable, and user-friendly interfaces. I work with JavaScript and specialize in all-things web.",
  "I thrive on collaborating with teams to deliver polished, production-ready features and visually appealing web applications.",
];

const contacts = [
  { label: "Email:", value: "kyledominicmendoza@gmail.com" },
  { label: "LinkedIn:", value: "/in/kyleemendoza/" },
];

export default function info() {
  return (
    <Container>
      <div className="flex-1 w-full grid grid-cols-10">
        <div className="col-span-4 flex flex-col justify-between pt-8 pb-30">
          <ScrambleText
            text="INFO"
            className="font-sans text-[120px] font-medium"
          />
          <div className="flex flex-col gap-6">
            {bio.map((text, i) => (
              <p key={i} className="font-sans text-2xl font-medium">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="relative col-span-4 col-start-7 pt-8 pb-30 flex flex-col pl-4">
          <div className="relative w-[98%] h-1/2">
            <Image
              src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&q=80"
              alt="Kyle Dominic Mendoza"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-auto grid grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <ContactItem
                key={contact.label}
                label={contact.label}
                value={contact.value}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <p className="font-sans text-lg font-medium">{label}</p>
      <ScrambleText
        text={value}
        className="font-mono text-[11px] uppercase text-gray-400"
      />
    </div>
  );
}
