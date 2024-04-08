import type { Page } from "puppeteer";

export class Package {
  private page: Page;
  private searchUrl: string = "";
  private packageId?: number = 0;
  private packageName: string = "";
  private packageDescription: string = "";
  private slug: string = "";
  private version: string = "";
  private author: string = "";
  private tags: { name: string; slug: string }[] = [];
  private publishingTime: string = "";
  private respository: string = "";
  private weeklyDownloads: number = 0;
  private license: string = "";

  constructor(page: Page, searchUrl: string) {
    this.page = page;
    this.searchUrl = searchUrl;
  }

  /* This url is the on the search page of npmjs.com */
  async setPackage() {
    await this.page.goto(this.searchUrl);
    const name = await this.page.$(".db7ee1ac > h3");
    const packageName = await name?.evaluate((el) => el.innerText);

    if (packageName) {
      this.packageName = packageName;
    }
  }
  setDescription(packageDescription: string) {
    this.packageDescription = packageDescription;
  }
  setSlug(slug: string) {
    this.slug = slug;
  }
  setVersion(version: string) {
    this.version = version;
  }
  setAuthor(author: string) {
    this.author = author;
  }
  setTags(tag: { name: string; slug: string }) {
    this.tags.push(tag);
  }
  setPublishingTime(publishingTime: string) {
    this.publishingTime = publishingTime;
  }
  setRepository(repository: string) {
    this.respository = repository;
  }
  setWeeklyDownloads(weeklyDownloads: number) {
    this.weeklyDownloads = weeklyDownloads;
  }
  setLicense(license: string) {
    this.license = license;
  }

  getPackageName() {
    return this.packageName;
  }
}
