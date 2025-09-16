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
        name: "Turn Table",
        description: "Need a better way to distrubute food or game cards during parties? Then a turntable is the perfect thing for you!",
        price: "$45",
        category: "wood",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 5,
        featured: true,
      },
      {
        name: "Cup Holder w/ Marker Hole",
        description: "Do you ever need a new way to keep all the cups together with a marker? Well, this cup holder holds both the cups, as well as a marker for the guests to write their names with.",
        price: "$12 or 2 for $20",
        category: "wood",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 5,
        featured: true,
      },
      {
        name: "Card Holders",
        description: "Have you ever played a card game and lost so many times you get a bunch of cards that you cant hold? Well, this tiered card holder is perfect for you. There are 3 tiers which can each hold multiple cards to your liking.",
        price: "$...",
        category: "wood",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 5,
        featured: false,
      },
      {
        name: "Egg Cartons",
        description: "Want to store your eggs in something that takes up a bit less space? Then you need one of our egg cartons!",
        price: "$6 or 2 for $10",
        category: "plastic",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 5,
        featured: false,
      },
      {
        name: "Beadable Pens",
        description: "Want a customizeable pens for school, work, etc? Well, we offer a product that you can fully customize yourself with many different kinds of beads.",
        price: "$5",
        category: "beaded",
        image: "https://images.unsplash.com/photo-1606904626950-1024d64eba31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 5,
        featured: false,
      },
      {
        name: "Wristlets",
        description: "Want your very own beaded, stretchy wristlet? This product is made to size for your wrist and customized with any beads that you want. It is optional to add a key ring for you to attach keys and other items to it.",
        price: "$8",
        category: "beaded",
        image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        rating: 4,
        featured: false,
      },
      {
        name: "Puzzle Box Lid Holder",
        description: "This is perfect for holding up that puzzle box lid while you work on the puzzle. It is able to fit any size box.",
        price: "$8",
        category: "printed",
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
