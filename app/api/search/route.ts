import { NextResponse } from "next/server"
import puppeteer from "puppeteer"
export async function GET(req: Request) {

    const { searchParams } = new URL(req.url)
    const search = searchParams.get("result")?.replaceAll(" ", "\%20")
    const pageNumber = searchParams.get("page") ?? 0

    console.log("search", search)

    let browser

    try {
        browser = await puppeteer.launch({
            headless: true,
        });
        const page = await browser.newPage();

        const url = `https://www.npmjs.com/search?q=${search}&page=${pageNumber}&perPage=20`
        await page.goto(url, {
            waitUntil: 'domcontentloaded'
        });

        console.log("launched puppeteer...")
        console.log("searching for contentScript...")

        const contentScript = await page.$$eval('.f4.black-90 > h3', options => {
            return options.map(option => console.log(option))

        })

        console.log("contentScript", contentScript)


        if (!contentScript) {
            console.log("contentScript not found")
            return NextResponse.json({ error: "An error occurred, please try again later" }, { status: 500 })
        }


    } catch (error) {

        return NextResponse.json({ error: "An error occurred, please try again later" }, { status: 500 })
    } finally {
        if (browser) {

            console.log("closing browser")
            await browser.close()
        }
        console.log("we can't find browser")
    }


    return NextResponse.json({ query: search }, { status: 200 })

}