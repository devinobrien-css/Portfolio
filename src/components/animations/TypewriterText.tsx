import cx from 'classnames';
import Typewriter from 'typewriter-effect';

interface TypeTextAnimationProps {
  text: string;
  className?: string;
}
export const TypewriterText = ({ text, className }: TypeTextAnimationProps) => {
  return (
    <div id='typewriter' className={cx(className, '')}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Hi, my name is')
            .pauseFor(2500)
            .start()
            .deleteAll()
            .typeString(text)
            .pauseFor(2500)
            .start()
            .deleteAll()
            .typeString('Welcome! My name is')
            .pauseFor(2500)
            .start()
            .deleteAll()
            .typeString('Greetings! My name is')
            .pauseFor(2500)
            .start()
            .deleteAll()
            .typeString('Nice to have you! My name is')
            .pauseFor(2500)
            .start()
            .deleteAll()
            .typeString('Hello there, my name is')
            .pauseFor(2500)
            .start();
        }}
      />
    </div>
  );
};
