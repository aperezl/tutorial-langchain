import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <h1 className='text-3xl'>Basic</h1>
      <ul>
        <li>
          <Link href='/api/basic/invoke'>Invoke</Link>
        </li>
        <li>
          <Link href='/api/basic/invoke?message=Hola, como estás hoy'>
            Invoke with message -Hola, como estás hoy-
          </Link>
        </li>
        <li>
          <Link href='/api/basic/batch?message1=Hola&message2=Como estás'>
            Batch with message [Hola, como estás hoy]
          </Link>
        </li>
        <li>
          <Link href='/api/basic/stream?message=Hola, como estás hoy'>
            Stream with message -Hola, como estás hoy-
          </Link>
        </li>
      </ul>
      <h1 className='text-3xl'>Prompts</h1>
      <ul>
        <li>
          <Link href='/api/prompt/basic?input=Jamones'>
            Invoke with basic -Jamones-
          </Link>
        </li>
        <li>
          <Link href='/api/prompt/messages?input=Jamones'>
            Invoke with message -Jamones-
          </Link>
        </li>
      </ul>
      <h1 className='text-3xl'>Output Parsers</h1>
      <ul>
        <li>
          <Link href='/api/outputParsers/basic?input=Jamones'>
            Invoke with string output parser -Jamones-
          </Link>
        </li>
        <li>
          <Link href='/api/outputParsers/comma?input=Jamones'>
            Invoke with comma separated output parser -Jamones-
          </Link>
        </li>
        <li>
          <Link href='/api/outputParsers/structured?input=Mónica tiene 44 años'>
            Invoke with comma structured output parser -Mónica tiene 44 años-
          </Link>
        </li>
        <li>
          <Link href='/api/outputParsers/zod?input=Dame una receta de espaguetis a la boloñesa, con chorizo y bacon'>
            Invoke with comma structured output parser -Dame una receta de
            espaguetis a la boloñesa, con chorizo y bacon-
          </Link>
        </li>
      </ul>
      <h1 className='text-3xl'>Retrivals</h1>
      <ul>
        <li>
          <Link href='/api/chains/basic'>Basic Chain</Link>
        </li>
      </ul>
    </div>
  )
}
