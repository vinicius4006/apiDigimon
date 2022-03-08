export const loadDigimons = async () => {
    const digiResponse = fetch("https://digimon-api.vercel.app/api/digimon");

    const [digiList] = await Promise.all([digiResponse]);

    const digiJson = await digiList.json();

    

    return digiJson;
}