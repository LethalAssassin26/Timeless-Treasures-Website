import { type Product, type InsertProduct, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.products = new Map();
    this.contacts = new Map();
    this.seedProducts();
  }

  private seedProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "CloudFlow Management Suite",
        description: "Comprehensive cloud-based management platform for streamlined business operations and real-time analytics. Features advanced reporting, team collaboration tools, and seamless integration with existing systems.",
        price: "$299/mo",
        category: "software",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 5,
        featured: true,
      },
      {
        name: "Enterprise Server Pro",
        description: "High-performance server solution with enterprise-grade reliability and scalability for growing businesses. Includes redundant power supplies, hot-swappable drives, and 24/7 monitoring capabilities.",
        price: "$2,499",
        category: "hardware",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 4,
        featured: true,
      },
      {
        name: "IT Consulting Services",
        description: "Expert consultation and strategic planning to optimize your IT infrastructure and digital transformation. Our certified consultants provide customized solutions for your specific business needs.",
        price: "$150/hr",
        category: "services",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 5,
        featured: false,
      },
      {
        name: "SecureShield Pro",
        description: "Advanced cybersecurity platform with real-time threat detection and automated response capabilities. Protects against malware, phishing, and advanced persistent threats.",
        price: "$199/mo",
        category: "software",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 4,
        featured: false,
      },
      {
        name: "UltraNet Router System",
        description: "High-speed networking solution with advanced security features and enterprise-level performance. Supports up to 1000 concurrent connections with load balancing and failover protection.",
        price: "$899",
        category: "hardware",
        image: "https://images.unsplash.com/photo-1606904626950-1024d64eba31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 5,
        featured: false,
      },
      {
        name: "Training & Support",
        description: "Comprehensive training programs and ongoing support to maximize your technology investment. Includes online courses, documentation, and dedicated support channels.",
        price: "$99/mo",
        category: "services",
        image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 4,
        featured: false,
      },
    ];

    sampleProducts.forEach(product => {
      const id = randomUUID();
      const fullProduct: Product = { 
        ...product, 
        id,
        rating: product.rating ?? 5,
        featured: product.featured ?? false
      };
      this.products.set(id, fullProduct);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      rating: insertProduct.rating ?? 5,
      featured: insertProduct.featured ?? false
    };
    this.products.set(id, product);
    return product;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      company: insertContact.company ?? null,
      service: insertContact.service ?? null,
      createdAt: new Date().toISOString(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
