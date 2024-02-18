
import style from "@/styles/design_Street.module.css";
import Image from "next/image";
// Supports weights 200-700
import '@fontsource-variable/oswald';
import ButtonLanding from "@/components/marerial/ButtonLanding";

function DesignStreetPage() {
  return (
    <main>
      <div className={style.container1}>
        <article className={style.card1}>
          <h1 className={style.h1}>Welcome to my World! </h1>
          <p className={style.subtitle}>
            The <strong>Lexus</strong> design is inspired by an environment of
            elegance and seriousness that only dark tones can give us.
          </p>
          <div className="flex justify-start items-center gap-8 mt-10 mb-8">
            <button className={style.button1}>Get Started</button>
            <div className={style.button2}>
            <ButtonLanding path="/pages/design_Lexus/landingPageLexus" />
            </div>
          </div>
        </article>
        <section className="hidden md:flex">
          <figure>
            <Image
              className="rounded-md aspect-auto w-80 h-[450px]"
              src="/img/Lexus_logo.jpg"
              alt="Lexus"
              width={400}
              height={400}
            />
          </figure>
        </section>
      </div>

      <div className={style.containerWhite}>
        <article className="mt-52 flex flex-col gap-y-7 lg:w-[900px]">
          <h2 className={style.h2}>Colors</h2>
          <p className={style.text}>
            The colors used in the <strong>Lexus</strong> design are black and
            white, which give the design a touch of elegance and seriousness.
          </p>
          <div>
            <div className="grid grid-cols-5 lg:gap-6 mt-10">
              <div className="flex flex-col justify-center items-center">
                <div className={style.color1}></div>
                <code className="mt-2 hidden md:flex">#f2f2f2</code>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className={style.color2}></div>
                <code className="mt-2 hidden md:flex">#bfbfbf</code>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className={style.color3}></div>
                <code className="mt-2 hidden md:flex">#731f2e</code>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className={style.color4}></div>
                <code className="mt-2 hidden md:flex">#727372</code>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className={style.color5}></div>
                <code className="mt-2 hidden md:flex">#0d0d0d</code>
              </div>
            </div>
          </div>
        </article>

        <article className="mt-52 flex flex-col gap-y-7 lg:w-[900px]">
          <h2 className={style.h2}>Typography</h2>
          <p className=" text-pretty">
            The typography used in the <strong>Lexus</strong> design is the
            Playfair Display font, which gives the design a touch of elegance
            and seriousness.
          </p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex flex-col justify-center items-center">
                <div className={style.h1}>Heading 1 ...</div>
                <div className={style.h2}>Heading 2 ... </div>
                <div className={style.h3}>Heading 3 ...</div>
                <div className={style.h4}>Heading 4 ...</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <div className={style.text}>
                  The quick brown fox jumps over the lazy dog.
                </div>
                <div className={style.text2}>
                  The quick brown fox jumps over the lazy dog.
                </div>
                <div className={style.text3}>
                  The quick brown fox jumps over the lazy dog.
                </div>
                <div className={style.text4}>
                  The quick brown fox jumps over the lazy dog.
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="mt-52 flex flex-col gap-y-7 lg:w-[900px]">
          <h2 className={style.h2}>Buttons</h2>
          <p className={style.text}>
            The buttons used in the <strong>Lexus</strong> design are black and
            white, which give the design a touch of elegance and seriousness.
          </p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex flex-col justify-center items-center gap-y-6">
                <button className={style.button1}>Get Started</button>
                <button className={style.button2}>Learn More</button>
                <button className={style.button3}>Submit</button>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-6">
                <button className={style.button4}>Get Started</button>
                <button className={style.button5}>Learn More</button>
                <button className={style.button6}>Submit</button>
              </div>
            </div>
          </div>
        </article>

        <article className="mt-52 flex flex-col gap-y-7 lg:w-[900px]">
          <h2 className={style.h2}>Inputs</h2>
          <p className={style.text}>
            The inputs used in the <strong>Lexus</strong> design are black and
            white, which give the design a touch of elegance and seriousness.
          </p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex flex-col justify-center items-center gap-y-6">

                <div className="w-96 flex gap-3 items-center">
                  <label>Name: </label>
                  <input
                    className={style.input1}
                    type="text"
                  />
                </div>

                <div className="w-96 flex gap-3 items-center">
                  <label>Email: </label>
                  <input
                    className={style.input2}
                    type="email"
                  />
                </div>

                <div className="w-96 flex gap-3 items-center">
                  <label>Password: </label>
                  <input
                    className={style.input3}
                    type="password"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-6">
                <div className="w-96 flex gap-3 items-center">
                  <label>Name: </label>
                  <input
                    className={style.input4}
                    type="text"
                  />
                </div>
                <div className="w-96 flex gap-3 items-center">
                  <label>Email: </label>
                  <input
                    className={style.input5}
                    type="email"
                  />
                </div>

                <div className="w-96 flex gap-3 items-center">
                  <label>Password: </label>
                  <input
                    className={style.input6}
                    type="password"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="mt-52 flex flex-col gap-y-7 lg:w-[900px]">
          <h2 className={style.h2}>Cards</h2>
          <p className={style.text}>
            The cards used in the <strong>Lexus</strong> design are black and
            white, which give the design a touch of elegance and seriousness.
          </p>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

              <div className={style.box1}>
                <h2 className={style.h3}>Lorem ipsum dolor</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  rem itaque in molestiae, placeat aspernatur accusantium
                </p>
              </div>

              <div className={style.box2}>
                <h2 className={style.h3}>Lorem ipsum dolor</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  rem itaque in molestiae, placeat aspernatur accusantium
                </p>
              </div>

              <div className={style.box3}>
                <h2 className={style.h3}>Lorem ipsum dolor</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  rem itaque in molestiae, placeat aspernatur accusantium
                </p>
              </div>

              <div className={style.box4}>
                <h2 className={style.h3}>Lorem ipsum dolor</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  rem itaque in molestiae, placeat aspernatur accusantium
                </p>
              </div>

              <div className={style.box5}>
                <h2 className={style.h3}>Lorem ipsum dolor</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  rem itaque in molestiae, placeat aspernatur accusantium
                </p>
              </div>

              <div className={style.box6}>
                <h2 className={style.h3}>Lorem ipsum dolor</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  rem itaque in molestiae, placeat aspernatur accusantium
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className={`h-72 ${style.containerSeparator1}`}></div>
    </main>
  );
}

export default DesignStreetPage;
