import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import { RiPauseCircleFill } from "react-icons/ri";
function Footer() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  const today = new Date();
  return (
    <div data-testid="footer" className="mt-40 mb-4 ">
      <a
        target="_blank"
        rel="noreferrer"
        href={data?.isPlaying ? data.songUrl : "https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig"}
        className="relative flex mx-auto mb-4 items-start px-6 py-4 space-x-4 transition-shadow border rounded-md hover:shadow-md w-full md:max-w-fit"
      >
        <div>{data?.isPlaying ? <img className="w-20 rounded-md shadow-sm" src={data?.albumImageUrl} alt={data?.album} /> : <SiSpotify size={60} color={"#1ED760"} />}</div>

        <div className="flex-1 space-y-2">
          <div className="flex justify-between">
            <p>{data?.isPlaying ? <RiPauseCircleFill size={24} /> : ""}</p>
            <p>{data?.isPlaying ? <SiSpotify size={20} color={"#1ED760"} /> : ""}</p>
          </div>
          <div>
            <p className="font-bold ">{data?.isPlaying ? data.title : "Not Listening"}</p>
            <p className="text-xs">{data?.isPlaying ? data.artist : "Spotify"}</p>
          </div>
        </div>
      </a>
      <p className="text-slate-500 text-sm text-center"> © {today.getFullYear()} Fasha Fadillah</p>
    </div>
  );
}
export default Footer;
