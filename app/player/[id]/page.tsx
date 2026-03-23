import TFTOverlay from "@/app/components/TFTOverlay";

export default async function PlayerPage({ params } : { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return(
        <TFTOverlay player_number={id}/>
    );
}