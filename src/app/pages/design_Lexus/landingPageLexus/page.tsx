import style from "@/styles/design_Lexus.module.css";
import Image from "next/image";
import "@fontsource-variable/playfair-display";

function LandingPageLexus() {
  return (
    <main>
      <div className={style.container1}>
        <section>
          <figure>
            <Image
              className="rounded-md aspect-auto w-96"
              src="/img/Landing_Lexus_Gym.jpg"
              alt="Lexus"
              width={400}
              height={400}
            />
          </figure>
        </section>
        <article className={style.card1}>
          <h1 className={style.h1}> Tú cuerpo, tú lienzo. </h1>
          <p className={style.subtitle}>
            ¿Sueñas con un cuerpo más fuerte, saludable y lleno de energía? La
            respuesta está en tus manos. El ejercicio regular es la llave que te
            abre las puertas a una vida más plena y vibrante.
          </p>
          <p className={style.subtitle}>
            En esta página web, te guiaremos en un viaje inspirador hacia tu
            mejor versión.
          </p>
          <div className="flex justify-end items-center gap-8 mt-10 mb-8">
            <button className={style.button1}>Comienza Ahora</button>
          </div>
        </article>
      </div>

      <div className={`h-64 ${style.containerSeparator1}`}></div>
      <div className={style.container2}>
        <h2 className={`text-center ${style.h2}`}>
          &quot;El ejercicio es la mejor medicina para el cuerpo y la
          mente.&quot;
        </h2>
      </div>
      <div className={`h-64 ${style.containerSeparator1}`}></div>

      <div className={`my-40 ${style.containerWhite}`}>
        <div className="grid grid-cols-2 gap-16">
          <div className="p-3 flex flex-col justify-center items-center h-96 text-[var(--color-5Lexus)] bg-[var(--color-2Lexus)] hover:bg-1Lexus hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out">
            <h3 className="text-4xl px-20">Salud</h3>
            <p className="text-center w-full px-24 text-xl mt-5">
              La salud es el tesoro más valioso y el más fácil de perder.
            </p>
          </div>
          <div className="p-3 flex flex-col justify-center items-center h-96 text-[var(--color-2Lexus)] bg-[var(--color-3Lexus)] hover:bg-5Lexus hover:text-1Lexus  hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out">
            <h3 className="text-4xl px-20">Ejercicio</h3>
            <p className="text-center w-full px-24 text-xl mt-5">
              El ejercicio es la mejor medicina para el cuerpo y la mente.
            </p>
          </div>
          <div className="p-3 flex flex-col justify-center items-center h-96 text-[var(--color-2Lexus)] bg-[var(--color-4Lexus)] hover:bg-2Lexus hover:text-5Lexus  hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out">
            <h3 className="text-4xl px-20">Nutrición</h3>
            <p className="text-center w-full px-24 text-xl mt-5">
              La nutrición es la clave para una vida saludable y llena de
              energía.
            </p>
          </div>
          <div className="p-3 flex flex-col justify-center items-center h-96 text-[var(--color-2Lexus)] bg-[var(--color-5Lexus)] hover:bg-black hover:text-white hover:shadow-2xl hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out ">
            <h3 className="text-4xl px-20">Bienestar</h3>
            <p className="text-center w-full px-24 text-xl mt-5">
              El bienestar es la suma de la salud, el ejercicio y la nutrición.
            </p>
          </div>
        </div>
      </div>

      <section className="p-20 mx-20  gap-6 bg-1Lexus">
        <div className="flex items-center">
        <article className="font-Lexus w-[900px] mr-16">
          <h2 className="text-5xl mb-10 pb-10">Logra tus objetivos</h2>
          <p className="text-xl tracking-wide mr-10 ">
            Nuestro gimnasio es un espacio diseñado para inspirarte a alcanzar
            tus metas de fitness. Con equipos de última generación y un equipo
            de entrenadores profesionales, te ayudaremos a alcanzar tus metas de
            fitness.
          </p>
          <div className="flex justify-end items-center gap-8 mt-10 mb-8 mr-10">
            <button className={style.button2}>Ver más</button>
          </div>
        </article>
        <figure>
          <Image
            className="rounded-md aspect-auto w-96"
            src="/img/Landing_Lexus_2.jpg"
            alt="Lexus"
            width={400}
            height={400}
          />
        </figure>
        </div>
      </section>

      <div className="bg-white h-40 w-full"></div>

      <section className="p-20 mx-20  gap-6 bg-1Lexus">
        <div className="flex items-center">
        <article className="font-Lexus w-[900px] mr-16">
          <h2 className="text-5xl mb-10 pb-10">
            Entrenamientos personalizados
          </h2>
          <p className="text-xl tracking-wide mr-10 ">
            Nuestros entrenadores profesionales te ayudarán a alcanzar tus
            objetivos de fitness con un plan de entrenamiento personalizado.
          </p>
          <div className="flex justify-end items-center gap-8 mt-10 mb-8 mr-10">
            <button className={style.button2}>Ver más</button>
          </div>
        </article>
        <figure>
          <Image
            className="rounded-md aspect-auto w-96"
            src="/img/Landing_Lexus_3.jpg"
            alt="Lexus"
            width={400}
            height={400}
          />
        </figure>
        </div>
      </section>

      <div className="bg-white h-40 w-full"></div>

      <div>
        <section className={style.container2}>
          <h2 className={style.h3}>
            &quot;El ejercicio es la mejor medicina para el cuerpo y la
            mente.&quot;
          </h2>
          <p className={style.subtitle}>
            Nuestro gimnasio es un espacio diseñado para inspirarte a alcanzar
            tus metas de fitness. Con equipos de última generación y un equipo de
            entrenadores profesionales, te ayudaremos a alcanzar tus metas de
            fitness.
          </p>
          <p>
            Nuestros entrenadores profesionales te ayudarán a alcanzar tus
            objetivos de fitness con un plan de entrenamiento personalizado.
          </p>
          <div className={style.card2}>
            <figure>
              <Image
                className="rounded-md aspect-auto w-64"
                src="/img/Lexus_1.jpg"
                alt="Lexus"
                width={300}
                height={300}
              />
            </figure>
            <div className="w-72">
              <h2 className={style.h2}>Register</h2>
              <form className="flex flex-col pt-4 mt-10">
                <label htmlFor="name">Name:</label>
                <input
                  className={style.input}
                  type="text"
                  id="name"
                  name="name"
                />
                <label htmlFor="email">Email:</label>
                <input
                  className={style.input}
                  type="email"
                  id="email"
                  name="email"
                />
                <label htmlFor="password">Password:</label>
                <input
                  className={style.input}
                  type="password"
                  id="password"
                  name="password"
                />
                <div className="mt-12">
                  <button className={style.button3}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <div className={`h-72 ${style.containerSeparator1}`}></div>

      <div className={`grid grid-cols-6 ${style.fontFamily} `}>
        <div className="col-span-4 p-3 flex flex-col justify-center items-center h-96 text-[var(--color-2Lexus)] bg-[var(--color-5Lexus)] ">
          <h3 className="text-5xl px-20">
            No puedo enseñar nada a nadie. Solo puedo hacerles pensar.
          </h3>
          <p className="text-end w-full px-24 text-xl mt-5">
            &quot;Sócrates.&quot;
          </p>
        </div>
        <div className="col-span-2 p-3 flex flex-col justify-center items-center h-96 text-[var(--color-2Lexus)] bg-[var(--color-4Lexus)]  ">
          <h3 className="text-3xl px-20">
            Educa a los niños y no será necesario castigar a los hombres.
          </h3>
          <p className="text-end w-full px-24 text-xl mt-5">
            &quot;Pitágoras.&quot;
          </p>
        </div>

        <div className="col-span-2 p-3 flex flex-col justify-center items-center h-96 text-[var(--color-2Lexus)] bg-[var(--color-3Lexus)]  ">
          <h3 className="text-2xl px-20">
            No lastimes a los demás con lo que te causa dolor a ti mismo.
          </h3>
          <p className="text-end w-full px-24 text-lg mt-5">
            &quot;Buda.&quot;
          </p>
        </div>
        <div className="col-span-4 p-3 flex flex-col justify-center items-center h-96 text-[var(--color-2Lexus)] bg-black  ">
          <h3 className="text-5xl px-20">
            La educación es el arma más poderosa que puedes usar para cambiar el
            mundo.
          </h3>
          <p className="text-end w-full px-24 text-xl mt-5">
            &quot;Nelson Mandela.&quot;
          </p>
        </div>
      </div>
      <div className={`h-72 ${style.containerSeparator1}`}></div>
    </main>
  );
}

export default LandingPageLexus;
