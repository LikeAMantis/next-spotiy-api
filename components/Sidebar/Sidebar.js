import { HomeIcon, SearchIcon, LibraryIcon, PlusIcon } from "@heroicons/react/outline"
import { Button } from "./Button"
import Link from "next/link";


export const Sidebar = ({ playlists }) => {
    return (
        <div className="hidden min-w-max shadow-lg overflow-y-scroll no-scrollbar bg-black text-secondary p-5 pr-7 pb-19 space-y-3 font-bold text-sm 
            lg:text-base md:block"
        >
            <Link href="/" scroll={true}><Button text="Home" icon={<HomeIcon className="w-4 lg:w-5" />} /></Link>
            <Button text="Search" icon={<SearchIcon className="w-4 lg:w-5" />} />
            <Button text="Library" icon={<LibraryIcon className="w-4 lg:w-5" />} />
            <Button text="Create Playlist" icon={<PlusIcon className="w-4 lg:w-5" />} />

            <div className="label-wrapper">
                <h3>Playlists</h3>
            </div>
            {/* Playlists */}
            <section className="space-y-2 font-normal">
                {playlists.map(playlist => (
                    <Link key={playlist.id} href={`/playlist/${playlist.id}`} scroll={true}>
                        <Button
                            text={playlist.name}
                        />
                    </Link>
                ))}
            </section>
        </div>
    )
}