import CompanionCard from "@/components/CompanionCard"
import CompanionList from "@/components/CompanionList"
import CTA from "@/components/CTA"
import { recentSessions } from "@/constants"
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.action"
import { getSubjectColor } from "@/lib/utils"


const Page = async () => {

  const companions = await getAllCompanions({limit: 3})
  const recentSessionCompanions = await getRecentSessions()
  console.log(recentSessionCompanions)

  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionList
          title = 'Recent completed sessions'
          companions = {recentSessionCompanions}
          classNames = 'w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page