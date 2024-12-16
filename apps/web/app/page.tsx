import { CustomChatSection } from './custom-demo'

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen p-20">
      <div className="mx-auto w-[72%] space-y-16 divide-y-4">
        <CustomChatSection />
      </div>
    </main>
  )
}
