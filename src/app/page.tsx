import ChangeThemeButtons from "@/components/marerial/ChangeThemeButtons";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { codeString1, codeString2, codeString3 } from "@/utils/data_codding";

function Homepage() {
  
  return (
    <main className="flex flex-col justify-center items-center bg-color-1 font-Onests">
      <header className="grid place-items-center md:grid-cols-2 md:gap-3 lg:gap-8 xl:gap-16 mx-4 md:mx-10 lg:mx-36 mt-16 mb-40">
        <article>
          <div className=" m-4 p-5 rounded-lg">
            <h1 className="text-3xl sm:text-5xl my-8 font-bold">
              Colores en Next js
            </h1>
            <p className="text-lg sm:text-2xl mt-16">
              Este es un proyecto de ejemplo para mostrar el uso de temas en
              Next js con Tailwind css.
            </p>
            <p className="text-lg sm:text-2xl mt-5">
              La idea es mostrar como se puede cambiar el tema de la aplicación
              con un simple click.
            </p>
          </div>
          <div className="flex lg:px-6 justify-center xl:justify-start">
            <ChangeThemeButtons />
          </div>
        </article>
        <div className="p-10 mx-4 bg-color-2 rounded-lg flex justify-center items-center ">
          <Image
            className="rounded-lg"
            src="/img/home_logo.jpg"
            width={400}
            height={400}
            alt="Colores"
            priority={true}
          />
        </div>
      </header>

      <section className="bg-color-2 w-full py-40 grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        <article className="bg-color-3 text-color-1 rounded-xl p-4 sm:p-8">
          <h2 className="text-4xl text-center my-10">¿Qué es Next js?</h2>
          <p className="text-xl sm:px-10 my-20 md:px-2 lg:px-6 xl:px-12">
            Next.js es un framework de desarrollo web de código abierto que
            permite funcionalidades como renderización del lado del servidor y
            generación de sitios web estáticos para aplicaciones web basadas en
            React. Se utiliza para construir aplicaciones web y sitios web
            estáticos, a menudo se le conoce como un marco de aplicaciones web
            React.
          </p>
        </article>

        <article className="bg-color-4 text-color-1 rounded-xl p-4 sm:p-8">
          <h2 className="text-4xl text-center my-10">¿Qué es Tailwind css?</h2>
          <p className="text-xl sm:px-10 my-20 md:px-2 lg:px-6 xl:px-12">
            Tailwind CSS es un marco de diseño de componentes CSS de utilidad de
            código abierto que proporciona estilos predefinidos para crear
            componentes personalizados. Se utiliza para construir aplicaciones
            web y sitios
          </p>
        </article>

        <article className="bg-color-5 text-color-1 rounded-xl p-4 sm:p-8">
          <h2 className="text-4xl text-center my-10">¿Qué es Typescript?</h2>
          <p className="text-xl sm:px-10 my-20 md:px-2 lg:px-6 xl:px-12">
            TypeScript es un lenguaje de programación de código abierto
            desarrollado y mantenido por Microsoft. Es un superconjunto de
            JavaScript, que esencialmente añade tipado estático y objetos
            basados en clases.
          </p>
        </article>

        <article className="bg-color-1 text-color-5 rounded-xl p-4 sm:p-8">
          <h2 className="text-4xl text-center my-10">¿Qué es React?</h2>
          <p className="text-xl sm:px-10 my-20 md:px-2 lg:px-6 xl:px-12">
            React es una biblioteca de JavaScript de código abierto diseñada
            para crear interfaces de usuario con el objetivo de facilitar el
            desarrollo de aplicaciones en una sola página. Es mantenido por
            Facebook y una comunidad de desarrolladores individuales y empresas.
          </p>
        </article>
      </section>

      <section className="bg-color-1 mt-32 p-20">
        <h2 className="text-3xl font-semibold">
          Implemetacion de temas en Next js con Tailwind css y Typescript
        </h2>

        <ol className="relative border-s border-color-2 mt-20">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-color-4 rounded-full mt-1.5 -start-1.5 border border-color-3"></div>
            <p className="mb-1 py-1 text-sm font-normal leading-none text-color-3">
              Definición de colores en globals.css
            </p>
            <h3 className="text-lg font-semibold text-color-5">
              :root {"{"} definir colores {"}"}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              En el archivo globals.css se definen las variables de colores que
              se utilizaran en la aplicación por defecto.
            </p>

            <div className="p-6 bg-color-2">
            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
              {codeString1}
            </SyntaxHighlighter>
            </div>
          </li>
          
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-color-4 rounded-full mt-1.5 -start-1.5 border border-color-3"></div>
            <p className="mb-1 py-1 text-sm font-normal leading-none text-color-3">
              Definición de colores de los temas
            </p>
            <h3 className="text-lg font-semibold text-color-5">
              /utils/changeTheme.ts
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              En el archivo changeTheme.ts se define la función que cambia el
              tema de la aplicación.
            </p>
            <div className="p-6 bg-color-2">
            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
              {codeString2}
            </SyntaxHighlighter>
            </div>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-color-4 rounded-full mt-1.5 -start-1.5 border border-color-3"></div>
            <p className="mb-1 py-1 text-sm font-normal leading-none text-color-3">
              Implementación de botones de cambio de tema
            </p>
            <h3 className="text-lg font-semibold text-color-5">
              /components/marerial/ChangeThemeButtons.tsx
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              En el archivo ChangeThemeButtons.tsx se define el componente que
              muestra los botones para cambiar el tema de la aplicación.
            </p>
            <div className="p-6 bg-color-2">
            <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
              {codeString3}
            </SyntaxHighlighter>
            </div>
          </li>
        </ol>
      </section>

      <footer className="bg-color-5 p-10 w-full">
        <p className="text-center text-color-1">
          &copy; 2021 - Todos los derechos reservados
        </p>
      </footer>
    </main>
  );
}

export default Homepage;
