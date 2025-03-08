/* eslint-disable @next/next/no-html-link-for-pages */
import {
    Footer,
    FooterColumn,
    FooterBottom,
    FooterContent,
} from "@/components/ui/footer";
import LaunchUI from "@/components/logos/launch-ui";


export default function Footer1() {
    return (
        <footer className="bg-background w-full px-4">
            <div className="max-w-container mx-auto">
                <Footer className="border-t pt-8">
                    <FooterContent className="sm:grid-cols-2 md:grid-cols-3">
                        <FooterColumn className="col-span-2 flex-row items-center justify-between gap-8 border-b pb-8 md:col-span-1 md:flex-col md:items-start md:justify-start md:border-b-0">
                            <div className="flex items-center gap-2">
                                <LaunchUI />
                                <h3 className="text-xl font-bold">BirinTAX</h3>
                            </div>

                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">Product</h3>
                            <a href="#" className="text-muted-foreground text-sm">
                                Changelog
                            </a>
                            <a href="#" className="text-muted-foreground text-sm">
                                Documentation
                            </a>
                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">Company</h3>
                            <a href="#" className="text-muted-foreground text-sm">
                                About
                            </a>
                            <a href="#" className="text-muted-foreground text-sm">
                                Careers
                            </a>
                            <a href="#" className="text-muted-foreground text-sm">
                                Blog
                            </a>
                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">Contact</h3>
                            <a href="#" className="text-muted-foreground text-sm">
                                Discord
                            </a>
                            <a href="#" className="text-muted-foreground text-sm">
                                Twitter
                            </a>
                            <a
                                href="/"
                                className="text-muted-foreground text-sm"
                            >
                                Github
                            </a>
                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">Legal</h3>
                            <a href="#" className="text-muted-foreground text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-muted-foreground text-sm">
                                Terms of Service
                            </a>
                            <a href="#" className="text-muted-foreground text-sm">
                                Cookie Policy
                            </a>
                        </FooterColumn>
                    </FooterContent>
                    <FooterBottom className="border-0">
                        <div>© 2025 Developed By Bima Adam. All rights reserved</div>
                    </FooterBottom>
                </Footer>
            </div>
        </footer>
    );
}
