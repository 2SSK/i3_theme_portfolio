const helpObj = {
  commands: [
    ["'about'", "Who made this website?"],
    ["'projects'", "Maybe there's something interesting."],
    ["'whoami'", "A perplexing question."],
    ["'repo'", "View the Github Repository."],
    ["'repo'", "Download my resume."],
    ["'banner'", "Display the banner."],
    ["'clear'", "Clear the terminal."],
  ],
};

const Help = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        {helpObj.commands.map((ele, index) => {
          const command = ele[0];
          const description = ele[1];
          return (
            <div key={index} className="flex">
              <span className="w-36 text-primary font-bold ">{command}</span>
              <span className="ml-4">{description}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <KeyHint keyName="Tab" description="for auto completion." />
        <KeyHint keyName="Esc" description="to clear the input line." />
        <p>
          Press <span className="font-bold text-textColor">[↑][↓]</span> to
          scroll through your history of commands.
        </p>
      </div>
    </div>
  );
};

interface KeyHintProps {
  keyName: string;
  description: string;
}

function KeyHint({ keyName, description }: KeyHintProps) {
  return (
    <p>
      Press <span className="font-bold text-textColor">[{keyName}]</span>{" "}
      {description}
    </p>
  );
}

export default Help;
