import CompanionComponent from "@/components/CompanionComponent"
import { getCompanion } from "@/lib/actions/companion.action"
import { getSubjectColor } from "@/lib/utils"
import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import { redirect } from "next/navigation"

interface CompanionSessionPageProps {
  params: Promise< {id: string} > 
}

const CompanionSession = async ({params} : CompanionSessionPageProps) => {

  const {id} = await params
  const companion = await getCompanion(id)
  const user = await currentUser()

  if (!companion) redirect('/companions')
  if (!user) redirect('/sing-in')

  return (
    <main>
      <article className="flex justify-between max-md:flex-col rounded-border p-6">
        <div className="flex items-center gap-2">
          
          <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor: getSubjectColor(companion.subject)}}>
            <Image src={`/icons/${companion.subject}.svg`} alt={companion.subject} height={35} width={35} />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              
              <p className="font-bold text-2xl">
                {companion.name}
              </p>

              <div className="subject-badge max-sm:hidden">
                {companion.subject}
              </div>  

            </div>

            <p className="text-lg">{companion.topic}</p>

          </div>
        </div>
        <div className="items-start text-2xl max-sm:hidden">
            {companion.duration}minutes⏱️
        </div>
      </article>
      <CompanionComponent
        {...companion}
        companionId = {id}
        userName = {user.firstName!}
        userImage = {user.imageUrl!}
      />
    </main>
  )
}

export default CompanionSession